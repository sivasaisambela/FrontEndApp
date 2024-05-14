import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation:string="";
  Username:string="";
  NoOfTeamMembers:number=0;
  TotalCostOfAllProjects:number=0;
  PendingTasks:number=0;
  UpcomingProjects:number=0;
  ProjectCost:number=0;
  CurrentExpenditure:number=0;
  AvailableFunds:number=0;
  Clients:string[]=[];
  Projects:string[]=[];
  Years:number[]=[];
  TeamMembersSummary:any=[];
  TeamMembers:any=[];
  constructor() { }

  ngOnInit(): void {
    this.Designation="Team Leader";
    this.Username="John Smith";
    this.NoOfTeamMembers=24;
    this.TotalCostOfAllProjects=240;
    this.PendingTasks=15;
    this.UpcomingProjects=2;
    this.ProjectCost=2113507;
    this.CurrentExpenditure=1213121;
    this.AvailableFunds=23232323232;

    this.Clients=["ABC Infotech","DEF Solutions","JKF Industries"];
    this.Projects=["Project A","Project B","Project C","Project Z"];

      for(var i=2021;i<=2024;i++)
      {
        this.Years.push(i);
      }

      this.TeamMembersSummary=[
        {Region:"East",TeamMembersCount:20,TemporaryUnavailableMembers:4},
        {Region:"West",TeamMembersCount:17,TemporaryUnavailableMembers:1},
        {Region:"South",TeamMembersCount:21,TemporaryUnavailableMembers:0},
        {Region:"North",TeamMembersCount:19,TemporaryUnavailableMembers:1}
      ];

      this.TeamMembers=[
        {Region:"East",Members:
        [{Id:1,Name:"Ford",Status:"Available"},
        {Id:2,Name:"Miller",Status:"Available"},
        {Id:3,Name:"James",Status:"Busy"},
        {Id:3,Name:"Jone",Status:"Busy"},
        ]
      },
      {Region:"West",Members:
      [{Id:1,Name:"Rand",Status:"Available"},
      {Id:2,Name:"Stu",Status:"Available"},
      {Id:3,Name:"Peter",Status:"Busy"},
      {Id:3,Name:"Lois",Status:"Busy"},
      ]
    },
    {Region:"South",Members:
    [{Id:1,Name:"Brai",Status:"Available"},
    {Id:2,Name:"Chri",Status:"Available"},
    {Id:3,Name:"Meg",Status:"Busy"},
    {Id:3,Name:"Joe",Status:"Busy"},
    ]
  },
  {Region:"North",Members:
  [{Id:1,Name:"Quag",Status:"Available"},
  {Id:2,Name:"Horace",Status:"Available"},
  {Id:3,Name:"Jerome",Status:"Busy"},
  {Id:3,Name:"Mayor",Status:"Busy"},
  ]
}
      ];
  }



}
