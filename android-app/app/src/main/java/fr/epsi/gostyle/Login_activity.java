package fr.epsi.gostyle;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import org.json.JSONException;
import org.json.JSONObject;


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

    public void login(View v) {
        EditText username = (EditText) findViewById(R.id.login);
        EditText password = (EditText) findViewById(R.id.password);

        //Utiliser Volley pour post un user

        JSONObject postData = new JSONObject();
        try {
            postData.put("name", username.getText().toString());
            postData.put("pass", password.getText().toString());

        } catch (JSONException e) {
            e.printStackTrace();
        }
       /* if (username.getText().toString().equals("maxime.audy@epsi.fr") && password.getText().toString().equals("donnees_test")) {

            Intent intent = new Intent(this,MainActivity.class);
            this.startActivity(intent);

        } else {
            String msg="Login ou mot de passe incorrect";
            displayToast(msg);
        }*/
    }

    protected void displayToast(String msg){
        Toast.makeText(this,msg,Toast.LENGTH_LONG).show();
    }
}