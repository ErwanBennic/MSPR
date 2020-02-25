package fr.epsi.gostyle;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.view.View;
import android.widget.ListView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.VolleyLog;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.google.zxing.Result;

import org.json.JSONObject;

import java.util.ArrayList;

import fr.epsi.gostyle.Models.Promotion;
import me.dm7.barcodescanner.zxing.ZXingScannerView;

public class MainActivity extends AppCompatActivity implements ZXingScannerView.ResultHandler {

    private static final int ZXING_CAMERA_PERMISSION = 1;
    private Class<?> mClss;
    // ToDo: remplacer id client
    private String urlPromos = "http://172.20.10.6:3000/clients/1";

    public static void display(MainActivity activity) {
        Intent intent = new Intent(activity,MainActivity.class);
        activity.startActivity(intent);
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        RequestQueue queue = Volley.newRequestQueue(this);

        StringRequest stringRequest = getPromotionsOfUser();
        queue.add(stringRequest);
    }

    private StringRequest getPromotionsOfUser() {
        return new StringRequest(Request.Method.GET, this.urlPromos,
                    new Response.Listener<String>() {
                        @Override
                        public void onResponse(String response) {
                            try {
                                ArrayList<Promotion> userPromotions = new ArrayList<Promotion>();

                                // Contains the json data
                                JSONObject client = new JSONObject(response);
                                for(int i = 0;i<=client.getJSONArray("promos").length()-1;i++){
                                    Object currentObjectPromotion = client.getJSONArray("promos").get(i);
                                    JSONObject currentPromotion = new JSONObject(currentObjectPromotion.toString());

                                    Promotion promotion = new Promotion();
                                    promotion.setImage((String) currentPromotion.get("image"));
                                    promotion.setCode((String) currentPromotion.get("code"));
                                    promotion.setLibelle((String) currentPromotion.get("libelle"));
                                    promotion.setPourcentage((int) currentPromotion.get("pourcentage"));
                                    promotion.setDatepremption((String) currentPromotion.get("dateperemption"));
                                    promotion.setMarque((String) currentPromotion.get("marque"));

                                    userPromotions.add(promotion);
                                }

                                setListView(userPromotions);
                            } catch (Exception e) {
                                e.printStackTrace();
                            }
                        }
                    }, new Response.ErrorListener() {
                @Override
                public void onErrorResponse(VolleyError error) {
                    VolleyLog.e("Error: " + error.toString());
                }
            });
    }

    private void setListView(ArrayList<Promotion> userPromotions) {
        ListView laListView = findViewById(R.id.listOfPromotions);
        ListArrayAdapter promotions = new ListArrayAdapter(MainActivity.this, R.layout.text_list_item_promotion, userPromotions);
        laListView.setAdapter(promotions);
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
