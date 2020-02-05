import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { PhonenumberPipe } from "./phonenumber.pipe";

fdescribe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, PhonenumberPipe],
      imports: [FormsModule]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular Pipes'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Angular Pipes");
  });

  //SECTION 1 - testing all caps

  it("should render title in a h1 tag and check for all caps", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Welcome to ANGULAR PIPES"
    );
  });

  //SECTION 2 - testing titlecase

  it("should render name in titlecase", () => {
    const fixture = TestBed.createComponent(AppComponent);

    // get the name's input and display elements from the DOM
    const bannerDe: DebugElement = fixture.debugElement;
    const nameDisplay = bannerDe.query(By.css(".name"));
    const nameDisplayEle: HTMLElement = nameDisplay.nativeElement;

    // Tell Angular to update the display binding through the title pipe
    fixture.detectChanges();

    expect(nameDisplayEle.textContent).toBe("Jane Doe");
  });

  //SECTION 3 - testing custom pipe for phone number

  it("should render phonenumber in specific format", () => {
    const fixture = TestBed.createComponent(AppComponent);

    // get the name's input and display elements from the DOM
    const bannerDe: DebugElement = fixture.debugElement;

    const numberDisplay = bannerDe.query(By.css(".number"));
    const numberDisplayEle: HTMLElement = numberDisplay.nativeElement;

    // Tell Angular to update the display binding through the title pipe
    fixture.detectChanges();

    expect(numberDisplayEle.textContent.trim()).toBe("(333) 333 3333");
  });
});
