import React from "react";

class VE {
  constructor() {
    this.template = "";
  }

  skeleton() {
    this.template = (
      <>
        <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
          <div className="h-48 rounded-t bg-gray-700"></div>
          <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-900">
            <div className="w-full h-6 rounded bg-gray-700"></div>
            <div className="w-full h-6 rounded bg-gray-700"></div>
            <div className="w-3/4 h-6 rounded bg-gray-700"></div>
          </div>
        </div>
      </>
    );
    return this.process();
  }

  loader() {
    this.template = (
      <>
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
      </>
    );
    return this.process();
  }

  process() {
    return this.template;
  }
}

export default VE;
