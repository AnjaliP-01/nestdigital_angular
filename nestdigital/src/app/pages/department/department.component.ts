import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
department=[
  {
    id:1,
    title:"HEALTHCARE",
    image:"../../../assets/health.jpg",
    des:"Promoting digital innovation & excellence in the healthcare industry."
  },
  {
    id:2,
    title:"BANKING AND FINANCE",
    image:"../../../assets/bank.jpg",
    des:"Accelerating the cashless economy efficiently by adopting global standards & local priorities"
  },
  {
    id:3,
    title:"AERONOTICAL",
    image:"../../../assets/areo.jpg",
    des:"Pushing boundaries & defending horizons with cutting-edge technologies"
  },
  {
    id:4,
    title:"GIS",
    image:"../../../assets/gisnest.jpg",
    des:"NeST GIS is a products and services entity under NeST Digital Technologies, offering advanced geospatial solutions with a focus on government, cadastral, utilities, transportation and facilities management."
  },
  {
    id:5,
    title:"INSURANCE",
    image:"../../../assets/insu.jpg",
    des:"Unlocking the potential of insurance through technology"
  },
  {
    id:6,
    title:"MOBILITY",
    image:"../../../assets/mob.jpg",
    des:"We are Revolutionizing the world of Mobility"
  },
]
}
