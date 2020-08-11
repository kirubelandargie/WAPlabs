package edu.miu;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;


public class CustomTime extends SimpleTagSupport{
	String foreColor;
    String size;
public void doTag() throws JspException, IOException
{
JspWriter out = getJspContext().getOut();
Date dNow = new Date();
SimpleDateFormat ft = new SimpleDateFormat ("E yyyy.MM.dd 'at' hh:mm:ss a zzz");
System.out.println("Current Date: " + ft.format(dNow));
if (foreColor != null)
out.write(String.format("<span style='color:%s; font-size: %s'>%s</span>", foreColor,size, ft.format(dNow)));
else
out.write(String.format("<span>%s</span>", size));
}

public void setForeColor(String foreColor)
{ this.foreColor = foreColor;
}
public void setSize(String size)
{ this.size = size;
}
}