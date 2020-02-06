package fr.epsi.gostyle;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.os.Bundle;

import me.dm7.barcodescanner.zxing.ZXingScannerView;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.google.zxing.Result;

public class MainActivity extends AppCompatActivity implements ZXingScannerView.ResultHandler {

    private static final int ZXING_CAMERA_PERMISSION = 1;
    private Class<?> mClss;

    public static void display(MainActivity activity) {
        Intent intent = new Intent(activity,MainActivity.class);
        activity.startActivity(intent);
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        String newString;
        if (savedInstanceState == null) {
            Bundle extras = getIntent().getExtras();
            if(extras == null) {
                newString= null;
            } else {
                newString= extras.getString("JSON_NOM");
                System.out.println(newString);
            }
        } else {
            newString = (String) savedInstanceState.getSerializable("JSON_NOM");
            System.out.println(newString);
        }

        // Get the widgets reference from XML layout
        LinearLayout lL = (LinearLayout) findViewById(R.id.listeCodes);

        // Create a TextView programmatically.
        TextView tv = new TextView(getApplicationContext());

        // Create a LayoutParams for TextView
        LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.WRAP_CONTENT, // Width of TextView
                LinearLayout.LayoutParams.WRAP_CONTENT); // Height of TextView

        // Apply the layout parameters to TextView widget
        tv.setLayoutParams(lp);

        tv.setText(newString);

        // Set a text color for TextView text
        tv.setTextColor(Color.parseColor("#000000"));

        lL.setPadding(100, 10, 10, 10);
        // Add newly created TextView to parent view group (RelativeLayout)
        lL.addView(tv);

    }

    public void launchSimpleActivity(View v) {
        launchActivity(SimpleScannerActivity.class);
    }

    public void launchActivity(Class<?> clss) {
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA)
                != PackageManager.PERMISSION_GRANTED) {
            mClss = clss;
            ActivityCompat.requestPermissions(this,
                    new String[]{Manifest.permission.CAMERA}, ZXING_CAMERA_PERMISSION);
        } else {
            Intent intent = new Intent(this, clss);
            startActivity(intent);
        }
    }

    @Override
    public void handleResult(Result rawResult) {

    }
}
