#include <node.h>

namespace calculator_module {
  using v8::Exception;
  using v8::FunctionCallbackInfo;
  using v8::Isolate;
  using v8::Local;
  using v8::Number;
  using v8::Object;
  using v8::String;
  using v8::Value;

  void Add(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = args.GetIsolate();

    // Check argument arity
    if (args.Length() < 2) {
      isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "Must send two argument to #add")));
      return;
    }

    // Check argument types
    if (!args[0]->IsNumber() || !args[1]->IsNumber()) {
      isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "#add only accepts numbers")));
      return;
    }

    // The actual calculation now
    double value = args[0]->NumberValue() + args[1]->NumberValue();
    Local<Number> num = Number::New(isolate, value);

    // Set the return value (using the passed in FunctionCallbackInfo<Value>&)
    args.GetReturnValue().Set(num);
  }

  void Subtract(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = args.GetIsolate();

    // Check argument arity
    if (args.Length() < 2) {
      isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "Must send two argument to #subtract")));
      return;
    }

    // Check argument types
    if (!args[0]->IsNumber() || !args[1]->IsNumber()) {
      isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "#subtract only accepts numbers")));
      return;
    }

    // The actual calculation now
    double value = args[0]->NumberValue() - args[1]->NumberValue();
    Local<Number> num = Number::New(isolate, value);

    // Set the return value (using the passed in FunctionCallbackInfo<Value>&)
    args.GetReturnValue().Set(num);
  }

  void Init(Local<Object> exports) {
    NODE_SET_METHOD(exports, "add", Add);
    NODE_SET_METHOD(exports, "subtract", Subtract);
  }

  NODE_MODULE(NODE_GYP_MODULE_NAME, Init)
}
