#include <iostream>
using namespace std;

void show(); // prototyping

class Animal // class
{
private:
    string name;

public:
    Animal(string n)
    {
        name = n;
    }
    void prints()
    {
        cout << name << " is Animal" << endl;
    }
};

class Dog : public Animal // inheritance
{
public:
    Dog(string n) : Animal(n) {}
    void speak() { cout << "bark!" << endl; }
};

int main()
{
    cout << "hello" << endl;
    Dog d("Goofy"); // object
    d.prints();
    d.speak();
    show();
    return 0;
}

void show()
{
    cout << "_____AI_____" << endl;
}