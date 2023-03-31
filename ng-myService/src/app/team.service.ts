// import { Injectable } from '@angular/core';
// import { HttpClient  } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { TeamInput, Team, TeamResponse } from './models';

// @Injectable({
//   providedIn: 'root'
// })
// export class TeamService {

//   private apiUrl = 'https://localhost:7111/api';

//   constructor(private http: HttpClient) {}

//   addTeam(team: TeamInput): Observable<TeamInput> {
    
//     return this.http.post<TeamInput>(`${this.apiUrl}/team`, team);
//   }

//   getTeams(): Observable<TeamResponse> {
//     return this.http.get<TeamResponse>(`${this.apiUrl}/team`);

//   }
// }
