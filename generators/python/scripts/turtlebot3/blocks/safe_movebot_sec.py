def safe_movebot_second(direction, second, speed):

    rate = rospy.Rate(10)
    twist = geometry_msgs.msg.Twist()
    start = time.time()

    twist.linear.z = 0.00

    if second > 30:
        second = 30

    if speed == "slow" and direction == "Forward":
        twist.linear.x = 0.05
    elif speed == "fast" and direction == "Forward":
        twist.linear.x = 0.10

    if speed == "slow" and direction == "Backward":
        twist.linear.x = -0.05
    elif speed == "fast" and direction == "Backward":
        twist.linear.x = -0.10

    fx_range = 230
    fy_range = 10

    bx_range = 110
    by_range = 130

    distance = 0

    if speed == "slow":
        distance = 0.175 * second
    elif speed == "fast":
        distance = 0.200 * second

    while not rospy.is_shutdown():
        sample_time = time.time()
        if (sample_time - start) > second:
            break

        if direction == "Forward":
            if safeMovement(fx_range, fy_range, distance, direction):
                rospy.loginfo("*****I detected an obstacle in front of me!*****")
                break
            else:
                rospy.loginfo("There is no obstacle ahead of me!")
        elif direction == "Backward":
            if safeMovement(bx_range, by_range, distance, direction):
                rospy.loginfo("*****I detected an obstacle behind me!*****")
                break
            else:
                rospy.loginfo("There is no obstacle behind me!")

        velocity_pub.publish(twist)
        rate.sleep()

    twist = geometry_msgs.msg.Twist()
    velocity_pub.publish(twist)
    rate.sleep()
    return 'Second Movement Data Sent!'

