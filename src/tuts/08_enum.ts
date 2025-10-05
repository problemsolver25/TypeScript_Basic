enum seatChoice {
    AISLE,  // by default value 0
    MIDDLE, // values get auto-incremented i.e 1
    WINDOW, // i.e 2
    CREW    // i.e 3
}

const hcSeat = seatChoice.MIDDLE;

enum permissions {
    read = 10,
    write, // i.e auto-incremented 11
    execute, // i.e auto-incremented 12
}

enum grade {
    A = 100,
    B = 60,
    C = 40,
    F = "FAILED"
}