def scanner_data_check(x_range, y_range, distance):
    distance = distance / 100
    print("@@@@@@@@@@@@@@@@ distance %s" % distance)

    ranges_scanner = list(ranges_scanner_total)
    ranges_scanner_help = []

    if x_range > y_range:
        for x in range(x_range, 359):
            if str(ranges_scanner[x]) == "inf":
                ranges_scanner[x] = 0
            ranges_scanner_help.append(ranges_scanner[x])
        for y in range(0, y_range):
            if str(ranges_scanner[y]) == "inf":
                ranges_scanner[y] = 0
            ranges_scanner_help.append(ranges_scanner[y])

    elif x_range < y_range:
        for x in range(x_range, y_range):
            if str(ranges_scanner[x]) == "inf":
                ranges_scanner[x] = 0
            ranges_scanner_help.append(ranges_scanner[x])

    elif x_range == y_range:
        return 'value of x is equal to y!'

    for i in range(0, len(ranges_scanner_help)):
        if ranges_scanner_help[i] <= distance and ranges_scanner_help[i] != 0:
            rospy.loginfo("There is a block near to you!")
            ranges_scanner_boolean = 1
            break
        elif ranges_scanner_help[i] > distance or ranges_scanner_help[i] == 0:
            rospy.loginfo(str(ranges_scanner_help[i]))
            rospy.loginfo("There is NO block near to you!")
            ranges_scanner_boolean = 0

    print("@@@@@@@@@@@@@@@@ There is a block?!: %s" % ranges_scanner_boolean)
    return str(ranges_scanner_boolean)

