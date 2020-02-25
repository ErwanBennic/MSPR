package fr.epsi.gostyle;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.VolleyLog;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import java.util.HashMap;
import java.util.Map;


public class Login_activity extends Activity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.login_layout);
        Button log = findViewById(R.id.loginButton);
        log.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Login_activity.this.login(v);
            }
        });
    }

    private void login(View v) {
        EditText username = (EditText) findViewById(R.id.login);
        EditText password = (EditText) findViewById(R.id.password);
        RequestQueue queue = Volley.newRequestQueue(this);
        StringRequest stringRequest = this.checkCredentials(username.getText(), password.getText());

        queue.add(stringRequest);
    }

    private StringRequest checkCredentials(final Editable email, final Editable password) {
        String loginUrl = "http://172.20.10.3:3000/login";

        StringRequest request = new StringRequest(Request.Method.POST, loginUrl,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        try {
                            System.out.println("Connexion réussie");
                            Intent intent = new Intent(Login_activity.this, MainActivity.class);
                            startActivity(intent);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                VolleyLog.e("Error: " + error.toString());
                System.out.println(error.networkResponse.statusCode);
                Toast.makeText(Login_activity.this, "Connexion échouée.", Toast.LENGTH_LONG).show();
            }
        }) {
            @Override
            protected Map<String, String> getParams()
            {
                Map<String, String>  params = new HashMap<String, String>();
                String email2 = email.toString();
                String password2 = password.toString();
                params.put("email", email2);
                params.put("password", password2);

                return params;
            }
        };

        return request;
    }
}