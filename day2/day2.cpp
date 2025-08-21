#include <iostream>
#include <cmath>
using namespace std;

class Shape
{
protected:
    int side[3]; // encapsulation
public:
    Shape(int S1) // polymorphism
    {
        side[0] = S1;
    };
    Shape(int S1, int S2)
    {
        side[0] = S1;
        side[1] = S2;
    };
    Shape(int S1, int S2, int S3)
    {
        side[0] = S1;
        side[1] = S2;
        side[2] = S3;
    };
    virtual void area() {};
};
//********************square class********************* */
class Square : public Shape
{
public:
    Square(int S1) : Shape(S1) {};
    void area() override { cout << "area of square :" << side[0] * side[0] << endl; }
};
//********************rectangle class********************* */

class Rectangle : public Shape
{
public:
    Rectangle(int S1, int S2) : Shape(S1, S2) {};

    void area() override { cout << "area of rectangle :" << side[0] * side[1] << endl; }
};
//********************triangle class********************* */

class Triangle : public Shape
{
public:
    Triangle(int S1, int S2, int S3) : Shape(S1, S2, S3) {};

    void area() override // abstraction hiding functionality and only show essential things
    {
        int s = (side[0] + side[1] + side[2]) / 2;
        int area = sqrt(s * (s - side[0]) * (s - side[1]) * (s - side[2]));
        cout << "area of triangle :" << area << endl;
    }
};
void home();
int main()
{
    // Square s(5);
    // Rectangle r(4, 6);
    // Triangle t(3, 4, 5);

    // s.area();
    // r.area();
    // t.area();

    home();
    return 0;
}
void home()
{
    int choice;
    cout << "choose shape that you want to find area\n1. square\n2. rectangle\n3. triangle\n";
    cin >> choice;
    if (choice == 1)
    {
        cout << "enter side length :";
        int side1;
        cin >> side1;
        Square s(side1);
        s.area();
    }
    else if (choice == 2)
    {
        cout << "enter side length :";
        int side1;
        cin >> side1;
        cout << "enter side width :";
        int side2;
        cin >> side2;
        Rectangle r(side1, side2);
        r.area();
    }
    else if (choice == 3)
    {
        cout << "enter first side length :";
        int side1;
        cin >> side1;
        cout << "enter second side length :";
        int side2;
        cin >> side2;
        cout << "enter third side length :";
        int side3;
        cin >> side3;
        Triangle t(side1, side2, side3);
        t.area();
    }
    else
    {
        exit(0);
    }
}
