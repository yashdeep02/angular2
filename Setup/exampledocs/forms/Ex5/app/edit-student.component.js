System.register(['@angular/core', '@angular/router', './student.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, student_service_1;
    var EditStudentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            }],
        execute: function() {
            EditStudentComponent = (function () {
                function EditStudentComponent(studentService, route, router) {
                    this.studentService = studentService;
                    this.route = route;
                    this.router = router;
                    this.studentId = this.route.snapshot.params['id'];
                    this.studentName = this.studentService
                        .getStudentById(this.studentId).name;
                }
                EditStudentComponent.prototype.save = function () {
                    this.studentService.saveStudent({ id: this.studentId, name: this.studentName });
                    this.router.navigate(['/list']);
                };
                EditStudentComponent = __decorate([
                    core_1.Component({
                        selector: 'edit-student-view',
                        templateUrl: 'app/edit-student.template.html'
                    }), 
                    __metadata('design:paramtypes', [student_service_1.StudentService, router_1.ActivatedRoute, router_1.Router])
                ], EditStudentComponent);
                return EditStudentComponent;
            }());
            exports_1("EditStudentComponent", EditStudentComponent);
        }
    }
});
//# sourceMappingURL=edit-student.component.js.map