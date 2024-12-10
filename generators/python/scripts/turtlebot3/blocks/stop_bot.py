def stop_robot():
    rate = rospy.Rate(10)
    twist = geometry_msgs.msg.Twist()
    start = time.time()
    flag = True

    twist.linear.x = 0.00
    twist.linear.y = 0.00
    twist.linear.z = 0.00
    twist.angular.x = 0.00
    twist.angular.y = 0.00
    twist.angular.z = 0.00

    while not rospy.is_shutdown() and flag:
        sample_time = time.time()
        if ((sample_time - start) > 2):
            flag = False
            break
        velocity_pub.publish(twist)
    twist = geometry_msgs.msg.Twist()
    velocity_pub.publish(twist)
    rate.sleep()

    rospy.loginfo("*********************ROBOT STOPED**************************")

    return 'Shutdown Set!'

