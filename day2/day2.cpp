#include <iostream>
#include <cmath>
using namespace std;

class Shape
{
protected:
    int side1;
    int side2; // encapsulation
    int side3;

public:
    Shape() {};
    virtual void area() {};
};
class Square : public Shape
{
public:
    Square(int s1)
    {
        side1 = s1;
    }
    void area() override { cout << "area of square:" << side1 * side1 << endl; }
};
class Rectangle : public Shape
{
public:
    Rectangle(int s1, int s2) // polimorphism
    {
        side1 = s1;
        side2 = s2;
    }
    void area() override { cout << "area of rectangle:" << side1 * side2 << endl; }
};
class Triangle : public Shape
{
public:
    Triangle(int s1, int s2, int s3)
    {
        side1 = s1;
        side2 = s2;
        side3 = s3;
    }
    void area() override
    {
        int s = (side1 + side2 + side3) / 2;
        int area = sqrt(s * (s - side1) * (s - side2) * (s - side3));
        cout << "area of triangle:" << area << endl;
    }
};

int main()
{
    Square s(5);
    Rectangle r(4, 6);
    Triangle t(3, 4, 5);
    cout << "hello";
    s.area();
    r.area();
    t.area();
    return 0;
}