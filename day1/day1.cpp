#include <iostream>
using namespace std;

class Person // class
{
    int id;
    string name;
    string dateOfBirth;

public:
    Person(int _id = 1)
    {
        id = _id;
    }

    int getId()
    {
        return id;
    }
    string getName()
    {
        return name;
    }
    string getDOB()
    {
        return dateOfBirth;
    }
    void setNAme(string _name)
    {
        name = _name;
    }
    void setDOB(string date)
    {
        dateOfBirth = date;
    }
};

class Student : public Person // inheritance
{
    int Class;
    char section;
    bool fee;

public:
    Student(int _id = 1) : Person(_id)
    {
        fee = false;
    }
    void setClassSection(int Class, char section)
    {
        ans = Class;
        section = section;
    }
    int getClass()
    {
        return Class;
    }
    char getSection()
    {
        return section;
    }
    void feePaid()
    {
        fee = true;
    }
    void studentDetails()
    {
        cout << "Id :" << getId() << "\nName :" << getName() << "\nDate Of Birth :" << getDOB() << "\nClass :" << Class << "\nSection :" << section << "\nfee paid :";
        if (fee)
        {
            cout << "paid";
        }
        else
        {
            cout << "not paid";
        }
        cout << endl;
    }
};
class Teacher : public Person // inheritance
{
    int mainClass;
    char mainSection;
    string subject;

public:
    Teacher(int _id = 1) : Person(_id)
    {
    }
    void setClassSection(int _Class, char _section)
    {
        mainClass = _Class;
        mainSection = _section;
    }
    int getClass()
    {
        return mainClass;
    }
    char getSection()
    {
        return mainSection;
    }
    void setSubject(string _subject)
    {
        subject = _subject;
    }
    void TeacherDetails()
    {
        cout << "Id :" << getId() << "\nName :" << getName() << "\nDate Of Birth :" << getDOB() << "\nManaging Class :" << mainClass << "\nManaging Section :" << mainSection << "\nsubject :" << subject << endl;
    }
};
void underline();
int main()
{
    Student A1(1001);
    A1.setNAme("Samarth");
    A1.setDOB("12/5/1999");
    A1.setClassSection(11, 'A');
    A1.feePaid();
    A1.studentDetails();
    underline();
    Teacher T1(101);
    T1.setNAme("Kiran");
    T1.setDOB("1/12/1971");
    T1.setClassSection(11, 'A');
    T1.setSubject("English");
    T1.TeacherDetails();
    return 0;
}
void underline()
{
    cout << "__________________________" << endl;
}
