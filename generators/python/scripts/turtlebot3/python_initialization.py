rospy.init_node('movebot_node', anonymous=True)

velocity_pub = rospy.Publisher('/cmd_vel', geometry_msgs.Twist, queue_size=10)