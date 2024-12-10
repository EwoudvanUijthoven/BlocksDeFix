def safe_movebot_distance(direction, distance, speed):
    twist = geometry_msgs.msg.Twist()

    turnFlag = "Left"
    turnDegree = 0

    fx_range = 345
    fy_range = 15

    bx_range = 165
    by_range = 195

    block_distance = 0.5

    listener = tf.TransformListener()

    if distance > 3:
        distance = 3

    twist.linear.z = 0.00
    twist.linear.y = 0.00

    twist.angular.x = 0.00
    twist.angular.y = 0.00
    twist.angular.z = 0.00

    distance_moved = 0
    rate = rospy.Rate(20)

    if speed == "slow" and direction == "Forward":
        twist.linear.x = 0.10
    elif speed == "normal" and direction == "Forward":
        twist.linear.x = 0.30
    elif speed == "fast" and direction == "Forward":
        twist.linear.x = 0.50

    if speed == "slow" and direction == "Backward":
        twist.linear.x = -0.10
    elif speed == "normal" and direction == "Backward":
        twist.linear.x = -0.30
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

        print("distance: %s" % distance)
        print("moved: %s" % distance_moved)
        if distance_moved >= distance - 0.10:
            if direction == "Forward":
                twist.linear.x = 0.10
            else:
                twist.linear.x = -0.10

        if distance_moved > distance:
            print("Breaking!!!")
            break

        checkAgain = False
        if turnDegree != 0:
            if direction == "Forward":
                if turnFlag == "Right":
                    if not safeMovement(turnDegree - 20, turnDegree + 20, 0.5, 0):
                        turnbot_degree("Left", turnDegree, "normal")
                        turnFlag = "Left"
                        turnDegree = 0
                    else:
                        rospy.loginfo("*****there is still an obstacle to the left")
                        checkAgain = True
                else:
                    if not safeMovement(360 - turnDegree - 20, 360 - turnDegree + 20, 0.5, 0):
                        turnbot_degree("Right", turnDegree, "normal")
                        turnFlag = "Left"
                        turnDegree = 0
                    else:
                        rospy.loginfo("*****there is still an obstacle to the right")
                        checkAgain = True
            else:
                if turnFlag == "Left":
                    if not safeMovement(180 - turnDegree - 50, 180 - turnDegree + 20, 0.5, 0):
                        turnbot_degree("Right", turnDegree, "normal")
                        turnFlag = "Left"
                        turnDegree = 0
                    else:
                        rospy.loginfo("*****there is still an obstacle to the right")
                        checkAgain = True
                else:
                    if not safeMovement(180 + turnDegree - 20, 180 + turnDegree + 20, 0.5, 0):
                        turnbot_degree("Left", turnDegree, "normal")
                        turnFlag = "Left"
                        turnDegree = 0
                    else:
                        rospy.loginfo("*****there is still an obstacle to the left")
                        checkAgain = True
        else:
            if direction == "Forward":
                if safeMovement(fx_range, fy_range, block_distance, direction):
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
                if safeMovement(bx_range, by_range, block_distance, direction):
                    rospy.loginfo("*****%There is a block near to you%!*****")
                    if safeMovement(135, 165, 0.6, "Backward"):
                        rospy.loginfo("*****There is a block near to left01!*****")
                        if safeMovement(196, 225, 0.6, "Backward"):
                            rospy.loginfo("*****There is a block near to right01!*****")
                            if safeMovement(110, 134, 0.6, "Backward"):
                                rospy.loginfo("*****There is a block near to left02!*****")
                                if safeMovement(226, 250, 0.6, "Backward"):
                                    rospy.loginfo("*****There is a block near to right01!*****")
                                    if safeMovement(90, 109, 0.6, "Backward"):
                                        rospy.loginfo("*****There is a block near to left03!*****")
                                        if safeMovement(251, 270, 0.6, "Backward"):
                                            rospy.loginfo("*****There is a block near to right03!*****")
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
                if safeMovement(fx_range, fy_range, block_distance, direction):
                    rospy.loginfo("*****%There is a block near to you%! - I am breaking!!!*****")
                    break
            else:
                if safeMovement(bx_range, by_range, block_distance, direction):
                    rospy.loginfo("*****%There is a block near to you%! - I am breaking!!!*****")
                    break
        velocity_pub.publish(twist)
        rate.sleep()

    twist = geometry_msgs.msg.Twist()
    twist.linear.x = 0
    velocity_pub.publish(twist)
    rate.sleep()

    return 'Distance Movement Data Sent!'

