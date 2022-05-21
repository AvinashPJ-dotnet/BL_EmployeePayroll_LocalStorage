class EmployeePayrollData{
    get id(){return this.id;}
    set id(id){this.id = id;}

    get name(){return this.name;}
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if(nameRegex.test(name)){
            this.name = name;
        }
        else throw 'Name is Incorrect!';
    }

    get profilePic(){return this.profilePic;}
    set profilePic(profilePic){this.profilePic = profilePic;}


    get gender(){return this.gender;}
    set gender(gender){this.gender = gender;}

    get department(){return this.department;}
    set department(department){this.department = department;}

    get salary(){return this.salary;}
    set salary(salary){this.salary = salary;}

    get note(){return this.note;}
    set note(note){this.note = note;}

    get startDate(){return this.startDate;}
    set startDate(startDate){this.startDate = startDate;}


    toString(){
        const option = {year:'numeric', month:'long', day:'numeric'};
        const empData = !this.startDate ? "undefined" : 
                        this.startDate.toLocalDateString("en-US",option);
        return "id ="+this.id+" name ="+this.name+" gender ="+this.gender+"profilePic ="+this.profilePic+"salary ="+this.salary+
        " department ="+this.department+" note ="+this.note+" start date ="+this.startDate ;
    }
}