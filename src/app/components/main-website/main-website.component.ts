import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-website',
  templateUrl: './main-website.component.html',
  styleUrls: ['./main-website.component.css']
})
export class MainWebsiteComponent implements OnInit {
  showheader=true;
  constructor(private _router: Router) { }
  ngOnInit(): void {
    console.log('Hey there, lurker. %c Made with ❤️ by Hameed Ibrahim → https://hameedibrh.com & YLP → https://yagneshlp.me', 'background: black; color: white; padding: 1ch 2ch; border-radius: 2rem;');
    if (navigator.userAgent.match(/samsung/i)) {
      alert("You are using a defective browser (Samsung Internet) that " + 
            "might not be configured to display this website properly. " +
            "You should consider using a proper standards-compliant " + 
            "browser instead. \n\n"+
            "We recommend using Google Chrome, Firefox or Microsoft Edge \n\n" + "- Graphique.");
            this._router.navigate(['r']);  }


  }
  
id = "tsparticles";
    
/* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
particlesUrl = "http://foo.bar/particles.json";

/* or the classic JavaScript object */
particlesOptions = {
    background: {
        color: {
            value: "#fff"
        }
    },
    fpsLimit: 120,
    "interactivity": {
      "events": {
        "onClick": {
          "enable": false,
          "mode": "push"
        },
        "onDiv": {
          "selectors": "#repulse-div",
          "mode": "repulse"
        },
        "onHover": {
          "enable": true,
          "mode": "bubble",
          "parallax": {
            "force": 60
          }
        }
      },
      "modes": {
        "bubble": {
          "distance": 400,
          "duration": 2,
          "opacity": 0.3,
          "size": 12
        },
        "grab": {
          "distance": 400
        }
      }
    },
    "particles": {
      "color": {
        "value": "#ffffff"
      },
      "links": {
        "color": {
          "value": "#000"
        },
        "distance": 150,
        "opacity": 0.3
      },
      "move": {
        "attract": {
          "rotate": {
            "x": 600,
            "y": 1200
          }
        },
        "enable": true,
        "outModes": {
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        }
      },
      "number": {
        "density": {
          "enable": true
        },
        "value": 15
      },
      "opacity": {
        "random": {
          "enable": true
        },
        "value": {
          "min": 0.05,
          "max": 0.3
        },
        "animation": {
          "enable": true,
          "speed": 0.2,
          "minimumValue": 0.2
        }
      },
      "rotate": {
        "random": {
          "enable": true
        },
        "animation": {
          "enable": true,
          "speed": 5
        },
        "direction": "random"
      },
      "shape": {
        "options": {
          "character": {
            "fill": false,
            "font": "Verdana",
            "style": "",
            "value": "*",
            "weight": "400"
          },
          "char": {
            "fill": false,
            "font": "Verdana",
            "style": "",
            "value": "*",
            "weight": "400"
          },
          "polygon": {
            "sides": 5
          },
          "star": {
            "sides": 5
          },
          "image": [
            {
              "src": "assets/flogo.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "assets/plogo.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "assets/glogo.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "assets/nitt.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-astronaut-space-vitaliy-gorbachev-flat-vitaly-gorbachev-4.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "https://img.icons8.com/fluency/34/000000/laptop.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/34/000000/external-brush-graphic-design-vitaliy-gorbachev-flat-vitaly-gorbachev.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "https://img.icons8.com/color/34/000000/fire-element--v1.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "https://img.icons8.com/color/34/000000/open-book--v1.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "https://img.icons8.com/color/34/000000/filled-like.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/34/000000/external-drink-carnival-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png",
              "width": 32,
              "height": 32
            }
            ,
            {
              "src": "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/34/000000/external-burger-fast-food-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png",
              "width": 32,
              "height": 32
            }
            ,
            {
              "src": "https://img.icons8.com/external-justicon-lineal-color-justicon/34/000000/external-emoji-emoji-justicon-lineal-color-justicon-9.png",
              "width": 32,
              "height": 32
            }
            ,
            {
              "src": "https://img.icons8.com/pastel-glyph/34/000000/vintage-glasses.png",
              "width": 32,
              "height": 32
            }
          ],
          "images": [
            {
              "src": "assets/flogo.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "assets/plogo.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "assets/glogo.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "assets/nitt.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-astronaut-space-vitaliy-gorbachev-flat-vitaly-gorbachev-4.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "https://img.icons8.com/fluency/34/000000/laptop.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/34/000000/external-brush-graphic-design-vitaliy-gorbachev-flat-vitaly-gorbachev.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "https://img.icons8.com/color/34/000000/fire-element--v1.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "https://img.icons8.com/color/34/000000/open-book--v1.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "https://img.icons8.com/color/34/000000/filled-like.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/34/000000/external-drink-carnival-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png",
              "width": 32,
              "height": 32
            }
            ,
            {
              "src": "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/34/000000/external-burger-fast-food-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png",
              "width": 32,
              "height": 32
            }
            ,
            {
              "src": "https://img.icons8.com/external-justicon-lineal-color-justicon/34/000000/external-emoji-emoji-justicon-lineal-color-justicon-9.png",
              "width": 32,
              "height": 32
            }
            ,
            {
              "src": "https://img.icons8.com/pastel-glyph/34/000000/vintage-glasses.png",
              "width": 32,
              "height": 32
            }
          ]
        },
        "type": "image"
      },
      "size": {
        "value": 16,
        "animation": {
          "speed": 40,
          "minimumValue": 0.1
        }
      },
      "stroke": {
        "color": {
          "value": "#000000",
          "animation": {
            "h": {
              "count": 0,
              "enable": false,
              "offset": 0,
              "speed": 1,
              "sync": true
            },
            "s": {
              "count": 0,
              "enable": false,
              "offset": 0,
              "speed": 1,
              "sync": true
            },
            "l": {
              "count": 0,
              "enable": false,
              "offset": 0,
              "speed": 1,
              "sync": true
            }
          }
        }
      }
    }
  }

}
