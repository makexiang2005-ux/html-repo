def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "U cant do that"
    return a / b

def regular_mode():
    try:
        num1 = float(input("Ur first number?: "))
        operation = input("Enter operation (+, -, *, /): ").strip()
        num2 = float(input("ur second number?: "))
        
        if operation == "+":
            result = add(num1, num2)
        elif operation == "-":
            result = subtract(num1, num2)
        elif operation == "*":
            result = multiply(num1, num2)
        elif operation == "/":
            result = divide(num1, num2)
        else:
            print("U cant do that")
            return

        print(f"result: {result}")
    except ValueError:
        print("No No, U cant do that boi")


def celsius_to_fahrenheit(celsius):
    return (celsius * 9 / 5) + 32

def conversion_mode():
    try:
        celsius = float(input("temperature in celcius?: "))
        fahrenheit = celsius_to_fahrenheit(celsius)
        print(f"{celsius}°C equals to {fahrenheit}°F")
    except ValueError:
        print("Bro, not cool.")


def main():
    mode = input("What mode u wanna use? (regular/conversion): ").strip().lower()
    if mode == "regular":
        regular_mode()
    elif mode == "conversion":
        conversion_mode()
    else:
        print("U serious man?")

main()
