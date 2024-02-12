import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'org-employee-details',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent {
// WIP
  empForm!: FormGroup;
constructor(private fb:FormBuilder){
this.createForm()
}
createForm(){
  this.empForm = this.fb.group({
    firstName: this.fb.control('',[Validators.required]),
    empId:this.fb.control('',[Validators.required]),
    email:this.fb.control('',[Validators.required,Validators.email]),
    skills:this.fb.array([this.fb.control('')])
  })
}
get skills():FormArray{
  return this.empForm.get('skills') as FormArray;
}
addSkills(){
  this.skills.push(this.fb.control(''))
}
removeSkill(i:number){
this.skills.removeAt(i);
}
onSubmit(){
  console.log(this.empForm.value)
}
 
}
