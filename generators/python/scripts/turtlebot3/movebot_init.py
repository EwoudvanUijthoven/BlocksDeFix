import rospy
from geometry_msgs.msg import Twist
import time

rospy.init_node('movebot_node', anonymous=True)

# velocity_pub = rospy.Publisher('/cmd_vel', Twist, queue_size=10)

rate = rospy.Rate(10)
twist = Twist()
start = time.time()
flag = True
twist.linear.z = 0.00
