def safe_movebot_second(direction, second, speed):
    turnFlag = "Left"
    turnDegree = 0

    rate = rospy.Rate(10)
    twist = geometry_msgs.msg.Twist()
    start = time.time()
    flag = True

    twist.linear.z = 0.00

    if second > 30:
        second = 30

    if speed == "slow" and direction == "Forward":
        twist.linear.x = 0.05
    elif speed == "normal" and direction == "Forward":
        twist.linear.x = 0.07
    elif speed == "fast" and direction == "Forward":
        twist.linear.x = 0.10

    if speed == "slow" and direction == "Backward":
        twist.linear.x = -0.05
    elif speed == "normal" and direction == "Backward":
        twist.linear.x = -0.07
    elif speed == "fast" and direction == "Backward":
        twist.linear.x = -0.10

    fx_range = 345
    fy_range = 15

    bx_range = 165
    by_range = 195

    distance = 0.5

    while not rospy.is_shutdown() and flag:
        sample_time = time.time()
        if (sample_time - start) > second:
            flag = False
            break
        checkAgain = False

        if turnDegree != 0:
            if direction == "Forward":
                if turnFlag == "Right":
                    if not safeMovement(turnDegree - 20, turnDegree + 20, 0.5, "Backward"):
                        turnbot_degree("Left", turnDegree, "normal")
                        turnFlag = "Left"
                        turnDegree = 0
                    else:
                        rospy.loginfo("*****there is still an obstacle to the left")
                        checkAgain = True
                else:
                    if not safeMovement(360 - turnDegree - 20, 360 - turnDegree + 20, 0.5, "Backward"):
                        turnbot_degree("Right", turnDegree, "normal")
                        turnFlag = "Left"
                        turnDegree = 0
                    else:
                        rospy.loginfo("*****there is still an obstacle to the right")
                        checkAgain = True
            else:
                if (turnFlag == 0):
                    if not safeMovement(180 - turnDegree - 30, 180 - turnDegree + 20, 0.5, "Backward"):
                        turnbot_degree("Right", turnDegree, "normal")
                        turnFlag = "Left"
                        turnDegree = 0
                    else:
                        rospy.loginfo("*****there is still an obstacle to the right")
                        checkAgain = True
                else:
                    if not safeMovement(180 + turnDegree - 20, 180 + turnDegree + 20, 0.5, "Backward"):
                        turnbot_degree("Left", turnDegree, "normal")
                        turnFlag = "Left"
                        turnDegree = 0
                    else:
                        rospy.loginfo("*****there is still an obstacle to the left")
                        checkAgain = True
        else:
            if direction == "Forward":
                if safeMovement(fx_range, fy_range, distance, direction):
                    rospy.loginfo("*****%There is a block near to you%!*****")
                    if safeMovement(16, 45, 0.6, "Backward"):
                        rospy.loginfo("*****There is a block near to left01!*****")
                        if safeMovement(315, 344, 0.6, "Backward"):
                            rospy.loginfo("*****There is a block near to right01!*****")
                            if safeMovement(46, 70, 0.6, "Backward"):
                                rospy.loginfo("*****There is a block near to left02!*****")
                                if safeMovement(290, 314, 0.6, "Backward"):
                                    rospy.loginfo("*****There is a block near to right02!*****")
                                    if safeMovement(71, 90, 0.6, "Backward"):
                                        rospy.loginfo("*****There is a block near to left03!*****")
                                        if safeMovement(270, 289, 0.6, "Backward"):
                                            rospy.loginfo("*****There is a block near to right03!*****")
                                            flag = False
                                            break
                                        else:
                                            turnFlag = "Right"
                                            turnDegree = 70
                                            turnbot_degree(turnFlag, turnDegree, "normal")
                                    else:
                                        turnFlag = "Left"
                                        turnDegree = 70
                                        turnbot_degree(turnFlag, turnDegree, "normal")
                                else:
                                    turnFlag = "Right"
                                    turnDegree = 50
                                    turnbot_degree(turnFlag, turnDegree, "normal")
                            else:
                                turnFlag = "Left"
                                turnDegree = 50
                                turnbot_degree(turnFlag, turnDegree, "normal")
                        else:
                            turnFlag = "Right"
                            turnDegree = 30
                            turnbot_degree(turnFlag, turnDegree, "normal")
                    else:
                        turnFlag = "Left"
                        turnDegree = 30
                        turnbot_degree(turnFlag, turnDegree, "normal")
                else:
                    rospy.loginfo("There is NO block near to you!")

            elif direction == "Backward":
                if safeMovement(bx_range, by_range, distance, direction):
                    rospy.loginfo("*****%There is a block near to you%!*****")
                    if safeMovement(135, 165, 0.6, "Backward"):
                        rospy.loginfo("*****There is a block near to left01!*****")
                        if safeMovement(196, 225, 0.6, "Backward"):
                            rospy.loginfo("*****There is a block near to right01!*****")
                            if safeMovement(110, 134, 0.6, "Backward"):
                                rospy.loginfo("*****There is a block near to left02!*****")
                                if safeMovement(226, 250, 0.6, "Backward"):
                                    rospy.loginfo("*****There is a block near to right02!*****")
                                    if safeMovement(90, 109, 0.6, "Backward"):
                                        rospy.loginfo("*****There is a block near to left03!*****")
                                        if safeMovement(251, 270, 0.6, "Backward"):
                                            rospy.loginfo("*****There is a block near to right03!*****")
                                            flag = False
                                            break
                                        else:
                                            turnFlag = "Left"
                                            turnDegree = 70
                                            turnbot_degree(turnFlag, turnDegree, "normal")
                                    else:
                                        turnFlag = "Right"
                                        turnDegree = 70
                                        turnbot_degree(turnFlag, turnDegree, "normal")
                                else:
                                    turnFlag = "Left"
                                    turnDegree = 50
                                    turnbot_degree(turnFlag, turnDegree, "normal")
                            else:
                                turnFlag = "Right"
                                turnDegree = 50
                                turnbot_degree(turnFlag, turnDegree, "normal")
                        else:
                            turnFlag = "Left"
                            turnDegree = 30
                            turnbot_degree(turnFlag, turnDegree, "normal")
                    else:
                        turnFlag = "Right"
                        turnDegree = 30
                        turnbot_degree(turnFlag, turnDegree, "normal")
                else:
                    rospy.loginfo("There is NO block near to you!")

        if checkAgain:
            if direction == "Forward":
                if safeMovement(fx_range, fy_range, distance, direction):
                    rospy.loginfo("*****%There is a block near to you%! - I am breaking!!!*****")
                    flag = False
                    break
            else:
                if safeMovement(bx_range, by_range, distance, direction):
                    rospy.loginfo("*****%There is a block near to you%! - I am Breaking!!!*****")
                    flag = False
                    break
        velocity_pub.publish(twist)
        rate.sleep()

    twist = geometry_msgs.msg.Twist()
    velocity_pub.publish(twist)
    rate.sleep()
    return 'Second Movement Data Sent!'

