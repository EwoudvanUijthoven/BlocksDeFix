def scanner_data():
    ranges_scanner = list(ranges_scanner_total)
    rospy.loginfo("#################" + str(ranges_scanner[10]) + "#################")
    rospy.loginfo("#################" + str(len(ranges_scanner)) + "#################")

    if str(ranges_scanner[0]) == "inf":
        ranges_scanner[0] = 0
    galaxies = "{\"publisher\":""\"laser_scan\""",\"type\":""\"update_laser\""",\"value\":[" + str(ranges_scanner[0])
    for j in range(1, len(ranges_scanner)):
        if str(ranges_scanner[j]) == "inf":
            ranges_scanner[j] = 0
        galaxies = galaxies + "," + str(ranges_scanner[j])

    galaxies = galaxies + "]}"

    return galaxies

