
<%@ page errorPage="MyError.jsp" %>
<%@page import="java.sql.*"  %>
<%@page import=" java.io.*"  %>
<%@page import=" javax.servlet.*" %> 
<%@page import ="javax.servlet.http.*" %> 
<%@page import ="java.sql.*" %>
<%@page import ="java.util.*" %>
<html>
	<body>
		<% 
		String user_name=request.getParameter("username");
		String pass_word=request.getParameter("password");
		String pass_word2=request.getParameter("password2");
		String phone_number=request.getParameter("phonenumber");
		String mail=request.getParameter("mailid");
		int c=0;
		int u=0;
		int p=0;
		int m=0;
		int a=0;
		int q=0;
		int dot=0;
		try{
		PrintWriter pw=response.getWriter();
		if(user_name.length()>5){
			u=1;
			a=1;
		}
		a=0;
		if(u==0)
		{
			%>
		<h1>your username should atleast contain 6 characters</h1>
		<h2>click on the signin link to re enter the form</h2>
		<a href="index.html">signin</a><%
		}
		if (pass_word2.equals(pass_word) && pass_word.length()>=5)
		{
			c=1;
			a=1;
		}
		a=0;
		if(c==0)
		{
		%>
		<h1>your passwords does not match</h1>
		<h2>click on the signin link to re enter the form</h2>
		<a href="index.html">signin</a><%
		} 
		for(int i=0;i<phone_number.length();i++)
		{
			if(phone_number.charAt(i)>=48 && phone_number.charAt(i)<=57 && phone_number.length()==10)
			{
				p=1;
				a=1;

			}
			else{
				break;
			}

		}
		a=0;
		if(p==0)
		{
		%>
		<h1>enter a valid phone number</h1>
		<h2>click on the signin link to re enter the form</h2>
		<a href="index.html">signin</a><%
		}
		for(int i=0;i<mail.length();i++)
		{
			if(mail.charAt(i)==64)
			{
				q++;
			}
			if(mail.charAt(i)==46)
			{
				dot++;
			}
		}
		if(q==1 && dot>=1 && mail.length()>=8)
		{
			m=1;
			a=1;
		}
		if(m==0)
		{
			%>
		<h1>enter a valid mail id</h1>
		<h2>click on the signin link to re enter the form</h2>
		<a href="index.html">signin</a><%

		}
		if(a==1)
		{
			Class.forName("com.mysql.jdbc.Driver");
		Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/project1?characterEncoding=utf8","root","1238");
			 PreparedStatement ps = con.prepareStatement("insert into projet values(?, ?, ?, ?)");
			ps.setString(1,user_name);
            ps.setString(2,pass_word);
			ps.setString(3,phone_number);
			ps.setString(4,mail);
                  ps.execute();

            	  con.close();
            	  response.sendRedirect("index.html");
            	}
            	else{
            		%>
		<h1>enter your details correctly</h1>
		<h2>click on the signin link to re enter the form</h2>
		<a href="index.html">signin</a><%
            	}
            	}
            	finally{}
		%> 
	</body>
</html>
