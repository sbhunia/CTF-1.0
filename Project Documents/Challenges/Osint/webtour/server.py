import socket
import threading

# Define the questions and answers
questions = ["Who is the creator of CTFd?", "What R/E tool was created by the NSA?", "What year was cybersecurity teaching site Try Hack me founded in?", "Where is the HQ of Hack the Box? (country code)"]
answers = ["Kevin Chung", "Ghidra", "2018", "UK"]

# Define the flag
flag = "MUCTF{web_tourist}"

# Function to handle each client's connection
def handle_client(client_socket):
    # Loop through the questions
    for i, question in enumerate(questions):
        client_socket.send(question.encode())
        # Receive the answer from the client
        answer = client_socket.recv(1024).decode().strip()
        # Check if the answer is correct
        if answer.lower() == answers[i].lower():
            continue
        else:
            client_socket.send("Incorrect answer. Try again.".encode())
            handle_client(client_socket)
            return
    
    # If all answers are correct, print the flag
    client_socket.send(("Congratulations! Here is your flag: " + flag).encode())

    # Close the connection
    client_socket.close()

# Main function to handle incoming connections
def main():
    # Define host and port
    host = '0.0.0.0'  # Listen on all available interfaces
    port = 12345

    while True:
        try:
            # Create socket object
            server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            server_socket.bind((host, port))
            server_socket.listen(5)
            print("[*] Listening on {}:{}".format(host, port))

            # Continuously accept incoming connections
            while True:
                client_socket, addr = server_socket.accept()
                print("[*] Accepted connection from: {}:{}".format(addr[0], addr[1]))
                # Create a new thread to handle the client
                client_handler = threading.Thread(target=handle_client, args=(client_socket,))
                client_handler.start()

        except Exception as e:
            print("Exception occurred:", e)
        finally:
            server_socket.close()

if __name__ == "__main__":
    main()
