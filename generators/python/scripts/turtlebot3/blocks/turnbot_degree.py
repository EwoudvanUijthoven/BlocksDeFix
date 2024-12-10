def turnbot_degree(clockwise, degreeAngle, speed):
    twist = geometry_msgs.Twist()

    listener = tf.TransformListener()

    if (clockwise == 0):
        angular_tolerance = math.radians(2.5)
    else:
        angular_tolerance = math.radians(-2.5)

    goal_angle = degreeAngle * (math.pi / 180)

    twist.linear.x = 0.00
    twist.linear.y = 0.00
    twist.linear.z = 0.00

    twist.angular.x = 0.00
    twist.angular.y = 0.00

    rate = rospy.Rate(20)

    if speed == 'slow' and clockwise == 'left':
        twist.angular.z = 0.25
    elif speed == 'normal' and clockwise == 'left':
        twist.angular.z = 0.5
    elif speed == 'fast' and clockwise == 'left':
        twist.angular.z = 0.75

    if speed == 'slow' and clockwise == 'right':
        twist.angular.z = -0.25
    elif speed == 'normal' and clockwise == 'right':
        twist.angular.z = -0.5
    elif speed == 'fast' and clockwise == 'right':
        twist.angular.z = -0.75

    odom_frame = "/odom"

    try:
        listener.waitForTransform(odom_frame, "/base_footprint", rospy.Time(0), rospy.Duration(1.0))
        base_frame = "/base_footprint"
    except (tf.Exception, tf.ConnectivityException, tf.LookupException):
        try:
            listener.waitForTransform(odom_frame, "/base_link", rospy.Time(0), rospy.Duration(1.0))
            base_frame = "/base_link"
        except (tf.Exception, tf.ConnectivityException, tf.LookupException):
            rospy.loginfo("Cannot find transform between /odom and /base_link or /base_footprint")
            rospy.signal_shutdown("tf Exception")
            return "no base_frame"

    rotation = get_odomRotate(listener, odom_frame, base_frame)

    last_angle = rotation

    turn_angle = 0

    while not rospy.is_shutdown():
        velocity_pub.publish(twist)
        rate.sleep()

        rotation = get_odomRotate(listener, odom_frame, base_frame)
        delta_angle = normalize_angle(rotation - last_angle)

        turn_angle += delta_angle
        last_angle = rotation

        turn = abs(turn_angle + angular_tolerance)
        goal = abs(goal_angle)

        print("goal_angle: %s" % goal_angle)
        print("rotate: %s" % rotation)
        if (abs(turn_angle + angular_tolerance) > abs(goal_angle) - 0.25):
            if (clockwise == 0):
                twist.angular.z = 0.20
            else:
                twist.angular.z = -0.20
        print("turn: %s" % turn)
        print("goal_angle: %s" % goal)
        if (abs(turn_angle + angular_tolerance) > abs(goal_angle)):
            print("Breaking!!!")
            break

        velocity_pub.publish(twist)
        rate.sleep()

    twist = geometry_msgs.Twist()
    twist.angular.z = 0.00
    velocity_pub.publish(twist)
    rate.sleep()

    return 'Rotational Movement Data Sent!'

