'use strict';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@serverless-devs/core");
var fc_1 = require("@midwayjs/serverless-spec-builder/fc");
var removeFaas = function (inputs) { return __awaiter(void 0, void 0, void 0, function () {
    var fcDeploy, functionProps, _i, functionProps_1, fcDeployInputs, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, core_1.loadComponent('fc-deploy')];
            case 1:
                fcDeploy = _a.sent();
                functionProps = fc_1.generateComponentSpec(inputs.props);
                console.log('functionProps', functionProps);
                delete inputs.props;
                _a.label = 2;
            case 2:
                _a.trys.push([2, 7, , 8]);
                _i = 0, functionProps_1 = functionProps;
                _a.label = 3;
            case 3:
                if (!(_i < functionProps_1.length)) return [3 /*break*/, 6];
                fcDeployInputs = functionProps_1[_i];
                console.log(Object.assign(__assign(__assign({}, inputs), fcDeployInputs)));
                return [4 /*yield*/, fcDeploy.remove(Object.assign(__assign(__assign({}, inputs), fcDeployInputs)))];
            case 4:
                _a.sent();
                core_1.Logger.log("Function '" + fcDeployInputs.props.function.name + "' remove success");
                _a.label = 5;
            case 5:
                _i++;
                return [3 /*break*/, 3];
            case 6: return [3 /*break*/, 8];
            case 7:
                e_1 = _a.sent();
                core_1.Logger.log("remove error: " + e_1.message);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.default = removeFaas;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFhcy5yZW1vdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZmFhcy5yZW1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2IsOENBQThEO0FBQzlELDJEQUE2RTtBQUU3RSxJQUFNLFVBQVUsR0FBRyxVQUFPLE1BQVc7Ozs7b0JBQ2xCLHFCQUFNLG9CQUFhLENBQUMsV0FBVyxDQUFDLEVBQUE7O2dCQUEzQyxRQUFRLEdBQUcsU0FBZ0M7Z0JBQzNDLGFBQWEsR0FBRywwQkFBcUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUM1QyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7Ozs7c0JBRXdCLEVBQWIsK0JBQWE7OztxQkFBYixDQUFBLDJCQUFhLENBQUE7Z0JBQS9CLGNBQWM7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sdUJBQU0sTUFBTSxHQUFLLGNBQWMsRUFBRyxDQUFDLENBQUM7Z0JBQzdELHFCQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sdUJBQU0sTUFBTSxHQUFLLGNBQWMsRUFBRyxDQUFDLEVBQUE7O2dCQUF0RSxTQUFzRSxDQUFDO2dCQUN2RSxhQUFNLENBQUMsR0FBRyxDQUFDLGVBQWEsY0FBYyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBa0IsQ0FBQyxDQUFDOzs7Z0JBSG5ELElBQWEsQ0FBQTs7Ozs7Z0JBTTFDLGFBQU0sQ0FBQyxHQUFHLENBQUMsbUJBQWlCLEdBQUMsQ0FBQyxPQUFTLENBQUMsQ0FBQzs7Ozs7S0FFNUMsQ0FBQztBQUVGLGtCQUFlLFVBQVUsQ0FBQyJ9