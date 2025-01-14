def safeMovement(range1, range2, distance, direction):
    ranges_scanner_safe = []
    scanBoolean_safe = False
    range1 = min(range1, len(ranges_scanner_total) - 1)
    range2 = min(range2, len(ranges_scanner_total) - 1)

    if direction == "Forward":
        for x in range(range1, len(ranges_scanner_total) - 1):
            ranges_scanner_safe.append(ranges_scanner_total[x])
        for y in range(0, range2):
            ranges_scanner_safe.append(ranges_scanner_total[y])
        for i in range(0, len(ranges_scanner_safe)):
            if ranges_scanner_safe[i] <= distance and ranges_scanner_safe[i] != 0:
                scanBoolean_safe = True
                break

    if direction == "Backward":
        for x in range(range1, range2):
            ranges_scanner_safe.append(ranges_scanner_total[x])
        for i in range(0, len(ranges_scanner_safe)):
            if ranges_scanner_safe[i] <= distance and ranges_scanner_safe[i] != 0:
                scanBoolean_safe = True
                break

    return scanBoolean_safe

