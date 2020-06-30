<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>input/button.jsp</title>
    </head>
    <body>
        <%
        String username = request.getParameter("username");
        String gender = request.getParameter("gender");    
     %>
     <table border="1">
         <tr>
             <td>이름</td>
             <td><%=username%></td>
            </tr>
            <tr>
                <td>성별</td>
                <td><%=gender%></td>
            </tr>
     </table> 
    </body>
    </html>