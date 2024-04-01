import java.util.Scanner;

public class reChallenge {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the correct password to reveal the flag: ");
        String input = scanner.nextLine();

        if (input.equals("OpenSesame")) {
            String flag = "MUCTF{Reverse_Engineering_Success}";
            System.out.println("Congratulations! Here is the flag: " + flag);
        } else {
            System.out.println("Incorrect password. Try again.");
        }

        scanner.close();
    }
}
