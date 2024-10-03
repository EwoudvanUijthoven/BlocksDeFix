def normalize_angle(angle):
    res = angle
    while res > math.pi:
        res -= 2.0 * math.pi
    while res < - math.pi:
        res += 2.0 * math.pi
    return res

