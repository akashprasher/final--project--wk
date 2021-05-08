# 6 [ N - number of munchkins that appear ]
# P2 4 4 [ munchkin of type P2 will appear at cell (4, 4) at second 0 ]
# P2 2 5 [ munchkin of type P2 will appear at cell (2, 5) at second 2 ]
# P2 5 4
# P1 5 3 [ munchkin of type P1 will appear at cell (5, 3) at second 6 ]
# P3 1 0
# P2 3 3
# M2 [ mace of type M2 has to be used ]

n = int(input())

bopped = 0

pp = []
rr = []
cc = []

current_row = 0
current_col = 0

for i in range(0, n):
    u_input = input().split()
    pp.append(u_input[0])
    rr.append(int(u_input[1]))
    cc.append(int(u_input[2]))

mun = input()

if mun == 'M1':
    print('true1')
    for i in range(0, n):
        for _ in range(0, 2):
            if rr[i] > cc[i]:
                if current_row > rr[i]:
                    current_row = - 2
                elif current_row < rr[i]:
                    current_row = + 2
            elif rr[i] < cc[i] or rr[i] == cc[i]:
                if current_col > cc[i]:
                    current_col = - 2
                elif current_col < cc[i]:
                    current_col = + 2
        print(str(current_row) + "," + str(current_col))
        if pp[i] == 'P1':
            if current_row == rr[i] and current_col == cc[i]:
                bopped = + 1

elif mun == 'M2':
    print('true2')

    for i in range(0, n):
        if rr[i] > cc[i] or rr[i] == cc[i]:
            if current_row > rr[i]:
                if rr[i] < 2:
                    current_row = - rr[i]
                else:
                    current_row = - 2
            elif current_row < rr[i]:
                if rr[i] < 2:
                    current_row = + rr[i]
                else:
                    current_row = + 2

        elif rr[i] < cc[i]:
            if current_col > cc[i]:
                if cc[i] < 2:
                    current_col = - cc[i]
                else:
                    current_col = - 2
            elif current_col < cc[i]:
                if cc[i] < 2:
                    current_col = + cc[i]
                else:
                    current_col = + 2

        print(str(current_row) + "," + str(current_col))

        if pp[i] == 'P2':
            if current_row == rr[i] and current_col == cc[i]:
                bopped = + 1

elif mun == 'M3':
    print('true3')

    for i in range(0, n):
        if rr[i] > cc[i]:
            if current_row > rr[i]:
                current_row = - 6
            elif current_row < rr[i]:
                current_row = + 6
        elif rr[i] < cc[i] or rr[i] == cc[i]:
            if current_col > cc[i]:
                current_col = - 6
            elif current_col < cc[i]:
                current_col = + 6
        print(str(current_row) + "," + str(current_col))

        if pp[i] == 'P3':
            if current_row == rr[i] and current_col == cc[i]:
                bopped = + 1

print(bopped)
