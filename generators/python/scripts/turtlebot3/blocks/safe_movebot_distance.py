def safe_movebot_distance(direction, distance, speed):
    twist = geometry_msgs.msg.Twist()

    fx_range = 230
    fy_range = 10

    bx_range = 110
    by_range = 130

    listener = tf.TransformListener()

    if distance > 3:
        distance = 3

    twist.linear.z = 0.00
    twist.linear.y = 0.00

    twist.angular.x = 0.00
    twist.angular.y = 0.00
    twist.angular.z = 0.00

    rate = rospy.Rate(20)

    if speed == "slow" and direction == "Forward":
        twist.linear.x = 0.10
    elif speed == "fast" and direction == "Forward":
        twist.linear.x = 0.50

    if speed == "slow" and direction == "Backward":
        twist.linear.x = -0.10
    elif speed == "fast" and direction == "Backward":
        twist.linear.x = -0.50

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

    position = get_odom(listener, odom_frame, base_frame)
    x_start = position.x
    y_start = position.y

    while not rospy.is_shutdown():
        velocity_pub.publish(twist)
        rate.sleep()
        position = get_odom(listener, odom_frame, base_frame)
        distance_moved = math.sqrt(math.pow((position.x - x_start), 2) + math.pow((position.y - y_start), 2))

        if distance_moved >= distance - 0.10:
            if direction == "Forward":
                twist.linear.x = 0.10
            else:
                twist.linear.x = -0.10

        if distance_moved > distance:
            print(f"Traveled {distance} meters!")
            break

        if direction == "Forward":
            if safeMovement(fx_range, fy_range, distance + 0.1, direction):
                rospy.loginfo("*****I detected an obstacle in front of me!*****")
                break
            else:
                rospy.loginfo("There is no obstacle ahead of me!")
        elif direction == "Backward":
            if safeMovement(bx_range, by_range, distance + 0.1, direction):
                rospy.loginfo("*****I detected an obstacle behind me!*****")
                break
            else:
                rospy.loginfo("There is no obstacle behind me!")

        velocity_pub.publish(twist)
        rate.sleep()

    twist = geometry_msgs.msg.Twist()
    twist.linear.x = 0
    velocity_pub.publish(twist)
    rate.sleep()

    return 'Distance Movement Data Sent!'

