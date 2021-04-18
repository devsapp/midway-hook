"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@serverless-devs/core");
var deploy_faas_1 = __importDefault(require("./deploy.faas"));
// import build from './build.faas';
var JamStackComponent = /** @class */ (function () {
    function JamStackComponent() {
    }
    /**
     * 部署应用
     * @param inputs
     */
    JamStackComponent.prototype.deploy = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var ProjectName, cwd, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ProjectName = (inputs.Project || inputs.props).ProjectName;
                        cwd = process.cwd;
                        this.logger.debug("[" + ProjectName + "] inputs params: " + JSON.stringify(inputs, null, 2));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, deploy_faas_1.default(cwd(), inputs)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4:
                        this.logger.info('部署完成');
                        return [2 /*return*/];
                }
            });
        });
    };
    JamStackComponent.prototype.dev = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var ProjectName, faasConfig;
            return __generator(this, function (_a) {
                ProjectName = inputs.Project.ProjectName;
                this.logger.debug("[" + ProjectName + "] inputs params: " + JSON.stringify(inputs, null, 2));
                faasConfig = (inputs.Properties || inputs.props).faasConfig;
                console.log(faasConfig);
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        core_1.HLogger('MIDWAY_FAAS'),
        __metadata("design:type", Object)
    ], JamStackComponent.prototype, "logger", void 0);
    return JamStackComponent;
}());
exports.default = JamStackComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUQ7QUFDekQsOERBQW1DO0FBQ25DLG9DQUFvQztBQUVwQztJQUFBO0lBd0JBLENBQUM7SUF0QkM7OztPQUdHO0lBQ0csa0NBQU0sR0FBWixVQUFhLE1BQVc7Ozs7Ozt3QkFDZCxXQUFXLEdBQUssQ0FBQSxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUEsWUFBbkMsQ0FBb0M7d0JBQy9DLEdBQUcsR0FBSyxPQUFPLElBQVosQ0FBYTt3QkFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBSSxXQUFXLHlCQUFvQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFHLENBQUMsQ0FBQzs7Ozt3QkFFdEYscUJBQU0scUJBQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBQTs7d0JBQTNCLFNBQTJCLENBQUM7Ozs7d0JBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDLENBQUM7Ozt3QkFFckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7O0tBQzFCO0lBQ0ssK0JBQUcsR0FBVCxVQUFVLE1BQVc7Ozs7Z0JBQ1gsV0FBVyxHQUFLLE1BQU0sQ0FBQyxPQUFPLFlBQW5CLENBQW9CO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFJLFdBQVcseUJBQW9CLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUcsQ0FBQyxDQUFDO2dCQUNoRixVQUFVLEdBQUssQ0FBQSxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUEsV0FBdEMsQ0FBdUM7Z0JBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Ozs7S0FFekI7SUF0QnVCO1FBQXZCLGNBQU8sQ0FBQyxhQUFhLENBQUM7O3FEQUFpQjtJQXVCMUMsd0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztrQkF4Qm9CLGlCQUFpQiJ9