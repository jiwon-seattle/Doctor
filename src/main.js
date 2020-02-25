<!DOCTYPE html>
<html>
  <head>
      <script type="text/javascript" src="main.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.6/handlebars.js">
      </script>
      <title>Doctor Lookup</title>
    </head>
    <body>

      <div class="container">
      
        <div class="item">  
        <br>
        <h1>&nbsp;Doctor Lookup</h1>
        <br>
        <br>
        <h3>&nbsp;Search potential doctors in the city that you are looking for.</h3>

        <form id="doctorIssue">
          <div class="form-row">
            <div class="locationIssue">
              <label for="location">&nbsp;&nbsp;A location:</label>
              <input id="locationIssue" type="text" placeholder='E.g. "Seattle"' required>
              &nbsp;
            </div>

            <div class="Issue">
              <label for="Issue">A medical issue:</label>
              <input type="text" id="issue" placeholder='E.g. "Dermatology"' required>
              <button type="submit" class="btn-info">Find doctors</button>
              <button id="searchDoctorName" type="button" style="font-size:1rem;">Search by doctor's last name?</button>
            </div>

          </div>
        </form>


          <form id="doctorName">
            <div class="form-row">
              <div class="locationDoctor">
                <label for="location">&nbsp;&nbsp;A location:</label>
                <input class="form-control-md" id="locationDoctor" type="text" placeholder='E.g. "LA"' required>
              </div>

              <div class="doctorName">
                <label for="doctorName">&nbsp;Doctor's last name:</label>
                <input class="form-control-md" type="text" id="name" placeholder='E.g. "Smith"' required>
                <button type="submit" class="btn-info">Find doctors</button>
                <button id="searchIssue" type="button" style="font-size:1rem;">Search by medical issue?</button>
              </div>

            </div>
          </form>
        </div>
        
        <div class="item">
          &nbsp;&nbsp;
          <img id="doctor" src="https://cdn.pixabay.com/photo/2017/09/27/20/55/clinical-trial-icon-2793430_1280.png">
        </div>
        
        <div class="break">
          <div id="doctorsInCity"></div>
          <script id="doctors-template" type="text/x-handlers-template">
            <h4>Better Doctor - Doctor Search Results</h4>
            <table cellpadding="10" width="100%">
              <thead>
                <th>Name</th>
                <th>Title</h5></th>
                <th>specialties</th>
              </thead>
              <tbody>
                {{#data}}
                <tr>
                  <td style="width:33%"><a id="{{uid}}" class="doctorsName">
                  {{profile.first_name}} {{profile.middle_name}} {{profile.last_name}}</a>
                  </td>
                  <td style="width:33%">{{profile.title}}</td>
                  <td style="width:33%">{{specialties.[0].name}}</td>
                </tr>
                {{/data}}
              </tbody>
            </table>
          </script>

          <div id="doctorInformation"></div>
          <script id="doctorInfo-template" type="text/x-handlers-template">
            <h4>Better Doctor - Doctor Search Results</h4>
            <table cellpadding="10" width="100%">
              <thead>
                <th>Picture</th>
                <th>Doctor</th>
                <th>Specialty</th>
                <th>Bio</th>
                <th>Address & Contact</th>
              </thead>
              <tbody>
                {{#data}}
                <tr>
                  <td><img src="{{profile.image_url}}"></img></td>
                  <td style="white-space:nowrap"> <strong>{{profile.title}}</strong> {{profile.first_name}} {{profile.middle_name}} {{profile.last_name}}</td>
                  <td>{{specialties.[0].name}}</td>
                  <td style="width:70%">{{profile.bio}}</td>
                  <td style="white-space:nowrap">{{practices.[0].visit_address.street}} {{practices.[0].visit_address.city}} {{practices.[0].visit_address.zip}} {{practices.[0].visit_address.state}}{{practices.[0].phones.[0].phones.[0].[0]}}</td>
                </tr>
                {{/data}}
              </tbody>
            </table>
        </script>
        </div>
      </div>  

    </body>
</html>
