def replacement(syrup, curr_dilution, rec_dilution):
    curr_dilution = curr_dilution / 100
    rec_dilution = rec_dilution / 100

    repl_amount = (syrup * (curr_dilution - rec_dilution)) / (rec_dilution - 1)
    return repl_amount


syrup = float(input("Enter the amount of syrup in your glass (in ml): "))
curr_dilution = float(input("Enter the current dilution percentage (%): "))
rec_dilution = float(input("Enter the recommended dilution percentage (%): "))

repl_amount = replacement(syrup, curr_dilution, rec_dilution)

if repl_amount > 0:
    repl_msg = f"Replace {repl_amount:.2f} ml of your syrup with water."
    print(repl_msg)
elif repl_amount < 0:
    repl_msg = f"Add {abs(repl_amount):.2f} ml of syrup to your glass."
    print(repl_msg)
else:
    print("Your syrup is already at the recommended dilution.")
