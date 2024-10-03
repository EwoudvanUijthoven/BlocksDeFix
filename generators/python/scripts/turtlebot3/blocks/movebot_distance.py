def movebot_distance(direction, distance, speed):
    twist = geometry_msgs.Twist()

    listener = tf.TransformListener()

    if distance > 3:
        distance = 3

    twist.linear.z = 0.00
    twist.linear.y = 0.00

    twist.angular.x = 0.00
    twist.angular.y = 0.00
    twist.angular.z = 0.00

    rate = rospy.Rate(20)

    if speed == 'slow' and direction == 'Forward':
        twist.linear.x = 0.10
    elif speed == 'normal' and direction == 'Forward':
        twist.linear.x = 0.30
    elif speed == 'fast' and direction == 'Forward':
        twist.linear.x = 0.50

    if speed == 'slow' and direction == 'Backward':
        twist.linear.x = -0.10
    elif speed == 'normal' and direction == 'Backward':
        twist.linear.x = -0.30
    elif speed == 'fast' and direction == 'Backward':
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

    position = get_odom(listener, odom_frame, base_frame)
    x_start = position.x
    y_start = position.y

    while not rospy.is_shutdown():
        velocity_pub.publish(twist)
        rate.sleep()
        position = get_odom(listener, odom_frame, base_frame)
        distance_moved = math.sqrt(math.pow((position.x - x_start), 2) + math.pow((position.y - y_start), 2))

        print("distance: %s" % distance)
        print("moved: %s" % distance_moved)
        if (distance_moved >= distance - 0.10):
            if (direction == 1):
                twist.linear.x = 0.10
            else:
                twist.linear.x = -0.10

        if (distance_moved > distance):
            print("Breaking!!!")
            break

        velocity_pub.publish(twist)
        rate.sleep()

    twist = geometry_msgs.Twist()
    twist.linear.x = 0
    velocity_pub.publish(twist)
    rate.sleep()

    return 'Distance Movement Data Sent!'

