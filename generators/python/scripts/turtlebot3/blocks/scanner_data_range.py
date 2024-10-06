def scanner_data_range(x_range, y_range):
    ranges_scanner = list(ranges_scanner_total)
    ranges_scanner_limit = []

    if x_range > y_range:
        rospy.loginfo("value of x is bigger than y!")
        for x in range(x_range, 359):
            ranges_scanner_limit.append(ranges_scanner[x])
        for y in range(0, y_range):
            ranges_scanner_limit.append(ranges_scanner[y])
    elif x_range < y_range:
        rospy.loginfo("value of x is smaller than y!")
        for x in range(x_range, y_range):
            ranges_scanner_limit.append(ranges_scanner[x])
    elif x_range == y_range:
        rospy.loginfo("value of x is equal to y!")
        ranges_scanner_limit.append(0)
    if str(ranges_scanner_limit[0]) == "inf":
        ranges_scanner_limit[0] = 0
    galaxies = "{\"publisher\":""\"laser_scan\""",\"type\":""\"update_laser\""",\"value\":[" + str(
        ranges_scanner_limit[0])
    for j in range(1, len(ranges_scanner_limit)):
        if str(ranges_scanner_limit[j]) == "inf":
            ranges_scanner_limit[j] = 0

        galaxies = galaxies + "," + str(ranges_scanner_limit[j])

    galaxies = galaxies + "]}"

    return galaxies

