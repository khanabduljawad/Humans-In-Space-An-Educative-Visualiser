var events=data;

function list(body){
    return`
    <li>
         <!-- begin timeline-time -->
         <div class="timeline-time">
            <span class="time">${body.Date}</span>
         </div>
         <!-- end timeline-time -->
         <!-- begin timeline-icon -->
         <div class="timeline-icon">
            <a href="javascript:;">&nbsp;</a>
         </div>
         <!-- end timeline-icon -->
         <!-- begin timeline-body -->
         <div class="timeline-body">
         <div class="timeline-content">
               <p>
                  <b>Researcher: </b> <span>${body.Researcher}</span> <br>
                  <b>Country: </b> <span>${body.Country}</span><br>
                  ${body.Event}
               </p>
          </div>
          <div class="timeline-footer">
            <p> 
              ${body.Summary}
            </p>
          </div>
    `
}

document.getElementById("importJson").innerHTML = `
${events.map(list).join('')}
`