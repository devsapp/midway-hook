'use strict';
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
var command_core_1 = require("@midwayjs/command-core");
var lodash_get_1 = __importDefault(require("lodash.get"));
var child_process_1 = require("child_process");
var fcli_plugin_package_1 = require("@midwayjs/fcli-plugin-package");
var fcli_plugin_fc_1 = require("@midwayjs/fcli-plugin-fc");
var fcli_plugin_deploy_1 = require("@midwayjs/fcli-plugin-deploy");
var deployFaas = function (baseDir, inputs) { return __awaiter(void 0, void 0, void 0, function () {
    var core;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                core = new command_core_1.CommandCore({
                    config: {
                        servicePath: baseDir,
                    },
                    commands: ['deploy'],
                    service: inputs.props,
                    log: console,
                    options: {
                        skipZip: true,
                        serverlessDev: {
                            access: lodash_get_1.default(inputs, 'credentials.Alias') || 'default',
                            args: lodash_get_1.default(inputs, 'args'),
                            path: lodash_get_1.default(inputs, 'path') || {},
                            command: lodash_get_1.default(inputs, 'command'),
                        },
                    },
                });
                core.addPlugin(fcli_plugin_package_1.PackagePlugin);
                core.addPlugin(fcli_plugin_fc_1.AliyunFCPlugin);
                core.addPlugin(fcli_plugin_deploy_1.DeployPlugin);
                return [4 /*yield*/, core.ready()];
            case 1:
                _a.sent();
                return [4 /*yield*/, core.invoke(['deploy'])];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var deployReactHooks = function (baseDir, inputs) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (reslove, reject) {
                child_process_1.spawn('npx', ['tsc && npx vite build'], {
                    shell: true,
                    cwd: baseDir,
                    stdio: 'inherit',
                })
                    .on('close', function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, deployFaas(baseDir, inputs)];
                            case 1:
                                _a.sent();
                                reslove('success');
                                return [2 /*return*/];
                        }
                    });
                }); })
                    .on('error', function () {
                    reject();
                });
            })];
    });
}); };
exports.default = deployReactHooks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFhcy5kZXBsb3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9mYWFzLmRlcGxveS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2IsdURBQXFEO0FBQ3JELDBEQUE2QjtBQUM3QiwrQ0FBc0M7QUFDdEMscUVBQThEO0FBQzlELDJEQUEwRDtBQUMxRCxtRUFBNEQ7QUFFNUQsSUFBTSxVQUFVLEdBQUcsVUFBTyxPQUFlLEVBQUUsTUFBTTs7Ozs7Z0JBQ3pDLElBQUksR0FBRyxJQUFJLDBCQUFXLENBQUM7b0JBQzNCLE1BQU0sRUFBRTt3QkFDTixXQUFXLEVBQUUsT0FBTztxQkFDckI7b0JBQ0QsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDO29CQUNwQixPQUFPLEVBQUUsTUFBTSxDQUFDLEtBQUs7b0JBQ3JCLEdBQUcsRUFBRSxPQUFPO29CQUNaLE9BQU8sRUFBRTt3QkFDUCxPQUFPLEVBQUUsSUFBSTt3QkFDYixhQUFhLEVBQUU7NEJBQ2IsTUFBTSxFQUFFLG9CQUFHLENBQUMsTUFBTSxFQUFFLG1CQUFtQixDQUFDLElBQUksU0FBUzs0QkFDckQsSUFBSSxFQUFFLG9CQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQzs0QkFDekIsSUFBSSxFQUFFLG9CQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUU7NEJBQy9CLE9BQU8sRUFBRSxvQkFBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUM7eUJBQ2hDO3FCQUNGO2lCQUNGLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLG1DQUFhLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQywrQkFBYyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsaUNBQVksQ0FBQyxDQUFDO2dCQUM3QixxQkFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUE7O2dCQUFsQixTQUFrQixDQUFDO2dCQUNuQixxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQTs7Z0JBQTdCLFNBQTZCLENBQUM7Ozs7S0FDL0IsQ0FBQztBQUVGLElBQU0sZ0JBQWdCLEdBQUcsVUFBTyxPQUFlLEVBQUUsTUFBTTs7UUFDckQsc0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDakMscUJBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO29CQUN0QyxLQUFLLEVBQUUsSUFBSTtvQkFDWCxHQUFHLEVBQUUsT0FBTztvQkFDWixLQUFLLEVBQUUsU0FBUztpQkFDakIsQ0FBQztxQkFDQyxFQUFFLENBQUMsT0FBTyxFQUFFOzs7b0NBQ1gscUJBQU0sVUFBVSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBQTs7Z0NBQWpDLFNBQWlDLENBQUM7Z0NBQ2xDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzs7OztxQkFDcEIsQ0FBQztxQkFDRCxFQUFFLENBQUMsT0FBTyxFQUFFO29CQUNYLE1BQU0sRUFBRSxDQUFDO2dCQUNYLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLEVBQUM7O0tBQ0osQ0FBQztBQUVGLGtCQUFlLGdCQUFnQixDQUFDIn0=