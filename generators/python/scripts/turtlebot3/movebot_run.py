while not rospy.is_shutdown() and flag:
    sample_time = time.time()
    if (sample_time - start) > second:
        flag = False
        break
    velocity_pub.publish(twist)
    rate.sleep()

twist = Twist()
velocity_pub.publish(twist)
rate.sleep()