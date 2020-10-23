import { WeatherItemComponent } from './weather-item.component';
import { TestBed } from '@angular/core/testing';

describe('Component: WeatherItem', () => {
  
//   it('it should construct', () => {
//     // arrange
//     const { build } = setup().default();
//     // act
//     const w = build();
//     // assert
//     // expect(w).toEqual
//   });
  
// });

// function setup() {
  
//   const builder = {
    
//     default() {
//       return builder;
//     },
//     build() {
//       return new WeatherItemComponent();
//     }
//   };

//   return builder;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherItemComponent]
    });
  })

  it('should create the app', () => {
    let fixture = TestBed.createComponent(WeatherItemComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })
}); 
