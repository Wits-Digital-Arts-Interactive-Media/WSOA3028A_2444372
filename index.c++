#include <iostream> // header file for basic input and pitput services in c++ programs
class PrimeNumberGenerator {//class initialization
public:
    PrimeNumberGenerator(int start = 2) : current(start) {}

    int nextPrime() {
        while (!isPrime(current)) {
            ++current; // basically checks numbers from 2 and for all numbers that are not even , outputs that prime number
        }
        return current++;
    }

private:
    bool isPrime(int n) {//bool flag to check if number is prime number or not
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;//meaning output is not a prime number
        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) return false;
        }
        return true;
    }

    int current;
};

int main() {
    PrimeNumberGenerator generator;//the instance function im using to generate all prime numbers through the use of a for loop to output the first ten prome numbers.
    for (int i = 0; i < 10; ++i) {
        std::cout<< "Hello World, Dumziii is just experimenting here dw abut him too much" << std::endl; //will output tge message in qoutes
        std::cout << generator.nextPrime() << " ";//cout here just refers to the program that handles all input and output functionalities
    }
    std::cout << std::endl;
    return 0;
}
 
