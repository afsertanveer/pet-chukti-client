import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle('Blogs');
  return (
    <div className=" my-5 py-5 px-2 mx-5 bg-white pt-3 border border-dark">
      <div className="m-3">
        <h3 className="font-bold">Difference between SQL and NoSQL</h3>
        <p className="mt-4">
          NoSQL (“non SQL” or “not only SQL”) databases were developed in the
          late 2000s with a focus on scaling, fast queries, allowing for
          frequent application changes, and making programming simpler for
          developers. Relational databases accessed with SQL (Structured Query
          Language) were developed in the 1970s with a focus on reducing data
          duplication as storage was much more costly than developer time. SQL
          databases tend to have rigid, complex, tabular schemas and typically
          require expensive vertical scaling.
        </p>
      </div>
      <div className="m-3">
        <h3 className="font-bold">What is JWT, and how does it work?</h3>
        <p className="mt-4">
          JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
          compact and self-contained way for securely transmitting information
          between parties as a JSON object. This information can be verified and
          trusted because it is digitally signed.
        </p>
        <p>
          JWTs differ from other web tokens in that they contain a set of
          claims. Claims are used to transmit information between two parties.
          What these claims are depends on the use case at hand. For example, a
          claim may assert who issued the token, how long it is valid for, or
          what permissions the client has been granted.
        </p>
      </div>
      <div className="m-3">
        <h3 className="font-bold">
          What is the difference between javascript and NodeJS?
        </h3>
        <li className="mt-4">
          JavaScript is a simple programming language that can be used with any
          browser that has the JavaScript Engine installed. Node. js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language.
        </li>
        <li>
          Any engine may run JavaScript. As a result, writing JavaScript is
          incredibly easy, and any working environment is similar to a complete
          browser. Node.js, on the other hand, only enables the V8 engine.
          Written JavaScript code, on the other hand, can run in any context,
          regardless of whether the V8 engine is supported.
        </li>
        <li>
          The critical benefits of JavaScript include a wide choice of
          interfaces and interactions and just the proper amount of server
          contact and direct visitor input. Node.js, on the other hand, offers
          node package management with over 500 modules and the capacity to
          handle many requests at the same time. It also offers the unique
          ability to enable microservice architectur
        </li>
      </div>
      <div className="m-3">
        <h3 className="font-bold">
          How does NodeJS handle multiple requests at the same time?
        </h3>
        <p className="mt-4">
          Multiple clients make multiple requests to the NodeJS server. NodeJS
          receives these requests and places them into the EventQueue . NodeJS
          server has an internal component referred to as the EventLoop which is
          an infinite loop that receives requests and processes them. This
          EventLoop is single threaded.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
