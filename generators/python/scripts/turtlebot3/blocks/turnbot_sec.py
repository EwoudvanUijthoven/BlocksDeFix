def turnbot_second(clockwise, second, speed):
    rate = rospy.Rate(10)
    twist = geometry_msgs.msg.Twist()
    start = time.time()
    flag = True

    twist.linear.x = 0.00
    twist.linear.y = 0.00
    twist.linear.z = 0.00

    twist.angular.x = 0.00
    twist.angular.y = 0.00

    if second > 30:
        second = 30

    if speed == 'slow' and clockwise == 'Right':
        twist.angular.z = -0.10
    elif speed == 'normal' and clockwise == 'Right':
        twist.angular.z = -0.25
    elif speed == 'fast' and clockwise == 'Right':
        twist.angular.z = -0.75

    if speed == 'slow' and clockwise == 'Left':
        twist.angular.z = 0.10
    elif speed == 'normal' and clockwise == 'Left':
        twist.angular.z = 0.25
    elif speed == 'fast' and clockwise == 'Left':
        twist.angular.z = 0.75

    while not rospy.is_shutdown() and flag:
        sample_time = time.time()
        if ((sample_time - start) > second):
            flag = False
            break

        velocity_pub.publish(twist)
        rate.sleep()

    twist = geometry_msgs.msg.Twist()
    velocity_pub.publish(twist)
    rate.sleep()
    return 'Rotational Movement Data Sent!'

