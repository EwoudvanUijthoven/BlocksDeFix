def movebot_second(direction, second, speed):
    rate = rospy.Rate(10)
    twist = geometry_msgs.Twist()
    start = time.time()
    flag = True

    twist.linear.z = 0.00

    if second > 30:
        second = 30

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

    while not rospy.is_shutdown() and flag:
        sample_time = time.time()
        if ((sample_time - start) > second):
            flag = False
            break
        velocity_pub.publish(twist)
        rate.sleep()

    twist = geometry_msgs.Twist()
    velocity_pub.publish(twist)
    rate.sleep()
    return 'Second Movement Data Sent!'

