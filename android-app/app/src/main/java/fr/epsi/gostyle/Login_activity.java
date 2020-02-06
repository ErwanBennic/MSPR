package fr.epsi.gostyle;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;


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
        if (username.getText().toString().equals("jdasilv") && password.getText().toString().equals("azerty")) {

            Intent intent = new Intent(this,MainActivity.class);
            this.startActivity(intent);

        } else {
            String msg="Login ou mot de passe incorrect";
            displayToast(msg);
        }
    }

    protected void displayToast(String msg){
        Toast.makeText(this,msg,Toast.LENGTH_LONG).show();
    }
}