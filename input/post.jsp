<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <%
            String id = request.getParameter("id");
            String pass = request.getParameter("pass");

            out.println("id는 : " + id + "<br>");
            out.println("password는 : " + pass + "<br>");
            
            %>
            id는 : <%=id%> <br>
            password는 : <%=pass%> <br>

    </body>
    </html>